using ETicaretApi.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence
{
    public static class ServiceRegistrationcs
    {
        public static void AddPersistenceServices(this IServiceCollection  services)
        {
            /*
              ConfigurationManager configurationManager = new();
            configurationManager.SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../../ETicaretApi.Api"));
            configurationManager.AddJsonFile("appsettings.json");

            services.AddDbContext<ETicaretApiDbContext>(options => options.UseNpgsql(configurationManager.GetConnectionString("PostgreSQL")));

             */
            //docker run --name PostgreSQL -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres
            services.AddDbContext<ETicaretApiDbContext>(options => options.UseNpgsql("Server=localhost;Database=ETicaretAPIDb;User Id=postgres;Password=123456;"));

        }
    }
}
