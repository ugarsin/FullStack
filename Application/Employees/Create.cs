using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Employees
{
    public class Create
    {
        public class Command : IRequest<EmployeeDto>
        {
            public EmployeeDto Employee { get; set; }
        }

        public class Handler(
                DataContext context,
                IMapper mapper
            ) : IRequestHandler<Command, EmployeeDto>
        {
            public async Task<EmployeeDto> Handle(Command request, CancellationToken cancellationToken)
            {
                var employee = mapper.Map<Employee>(request.Employee);
                employee.Id = Guid.NewGuid();

                context.Employees.Add(employee);
                await context.SaveChangesAsync(cancellationToken);

                var result = mapper.Map<EmployeeDto>(employee);

                return result;
            }
        }
    }
}
