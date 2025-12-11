using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.Employees;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController(IMediator mediator) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<EmployeeDto>>> GetEmployees()
        => await mediator.Send(new List.Query());

    [HttpPost]
    public async Task<ActionResult<EmployeeDto>> CreateEmployee(EmployeeDto dto)
        => await mediator.Send(new Create.Command { Employee = dto });
}
