using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Employee
    {
        public Guid Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public string? Position { get; set; }
        public DateTime DateHired { get; set; }
        public string Gender { get; set; } = default!;
    }
    public enum Gender
    {
        Male,
        Female,
        Other
    }
}
