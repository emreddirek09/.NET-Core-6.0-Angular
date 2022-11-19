using ETicaretApi.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence
{
    public class DesignTimeAPIDbContext : IDesignTimeDbContextFactory<ETicaretApiDbContext>
    {
        public ETicaretApiDbContext CreateDbContext(string[] args)
        {


            /*
             ConfigurationManager configurationManager = new();
            configurationManager.SetBasePath(Path.Combine(Directory.GetCurrentDirectory(),"../../ETicaretApi.Api"));
            configurationManager.AddJsonFile("appsettings.json");
 
            DbContextOptionsBuilder<ETicaretApiDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql(configurationManager.GetConnectionString("PostgreSQL"));
            return new (dbContextOptionsBuilder.Options);
             */
            DbContextOptionsBuilder<ETicaretApiDbContext> dbContextOptionsBuilder = new();
            dbContextOptionsBuilder.UseNpgsql("User ID=postgres;Password=123456;Host=localhost;Port=5432;Database=ETicaretApi;");
            return new (dbContextOptionsBuilder.Options);
        }
    }
}
