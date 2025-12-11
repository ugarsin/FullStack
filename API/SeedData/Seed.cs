using Domain;
using Persistence;

namespace API.SeedData
{
    public class Seed
    {
        public static void DataSeeder(IServiceProvider serviceProvider)
        {
            using (var scope = serviceProvider.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<DataContext>();
                if (!context.Employees.Any())
                {
                    var employees = new List<Employee>()
                    {
                        new Employee{ FirstName="Jane", LastName="Doe", Email="jane@test.com", Position="Analyst", DateHired=DateTime.Today.AddDays(-1293) },
                        new Employee{ FirstName="Bob", LastName="Nugget", Email="bob@test.com", Position="Senior ", DateHired=DateTime.Today.AddDays(-1200) },
                        new Employee{ FirstName="Tom", LastName="Landers", Email="tom@test.com", Position="Middle Analyst", DateHired=DateTime.Today.AddDays(-1239) },
                        new Employee{ FirstName="Jim", LastName="Jump", Email="jim@test.com", Position="Junior Analyst", DateHired=DateTime.Today.AddDays(-1333) },
                        new Employee{ FirstName="Tim", LastName="Handy", Email="tim@test.com", Position="Analyst", DateHired=DateTime.Today.AddDays(-1123) },
                    };

                    context.AddRange(employees);
                    context.SaveChanges();
                }
            }
            return;
        }
    }
}
