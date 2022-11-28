using ETicaretApi.Domain.Entities;
using ETicaretApi.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence.Contexts
{
    public class ETicaretApiDbContext : DbContext
    {
        public ETicaretApiDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            //BaseEntity içerisindeki her tabloda gidecek olan alanları statik olarak create ya da update durumuna göre ekleme yapılacak.

            // ChangeTracker Enttityler üzerinden yapılan değişiklerin ya da eklenen verilerin yakalanmasını sağlar. Update edilen işlemlerde Track Edilen veerileri yakalayıp elde ederiz.

            var datas = ChangeTracker.Entries<BaseEntity>();
            foreach (var data in datas)
            {
                var _ = data.State switch
                {
                    EntityState.Added => data.Entity.CreateDate = DateTime.UtcNow,
                    EntityState.Modified => data.Entity.UpdateDate = DateTime.UtcNow,
                    _=>DateTime.UtcNow
                };
            }
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
