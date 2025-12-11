using MediatR;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Employees;

public class List
{
    public class Query : IRequest<List<EmployeeDto>> { }
        
    public class Handler(DataContext context, IMapper mapper)
        : IRequestHandler<Query, List<EmployeeDto>>
    {
        public async Task<List<EmployeeDto>> Handle(Query request, CancellationToken ct)
        {
            var employees = await context.Employees.ToListAsync(ct);
            return mapper.Map<List<EmployeeDto>>(employees);
        }
    }
}
