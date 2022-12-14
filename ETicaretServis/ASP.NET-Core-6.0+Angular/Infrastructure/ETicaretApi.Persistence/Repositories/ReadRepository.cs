using ETicaretApi.Application.Repositories;
using ETicaretApi.Domain.Entities.Common;
using ETicaretApi.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly ETicaretApiDbContext _context;

        public ReadRepository(ETicaretApiDbContext context)
        {
            _context = context;
        }

        public DbSet<T> Table => _context.Set<T>();

        public IQueryable<T> GetAll(bool tracking = true)
        {
            //Tracking ile metotların takibi yapılıyor.
            var query = Table.AsQueryable();
            if (!tracking)
                query = query.AsNoTracking();
            return query;
        }

        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method, bool tracking = true)
        {
            var query = Table.Where(method);
            if (!tracking)
                query = query.AsNoTracking();
            return query;
        }
        public async Task<T> GetSingleAsync(Expression<Func<T, bool>> method, bool tracking = true)
        {
            var query = Table.AsQueryable();
            if (!tracking)
                query = Table.AsNoTracking(); 
            return await query.FirstOrDefaultAsync(method); 
        }

        //public async Task<T> GetByIdAsync(string id, bool tracking = true) => await Table.FindAsync(Guid.Parse(id)); Tracking Metotta Find() metotu bulunmaz
        public async Task<T> GetByIdAsync(string id, bool tracking = true )
        {
            var query = Table.AsQueryable();
            if(!tracking)
                query = Table.AsNoTracking();
#pragma warning disable CS8603 // Possible null reference return.
            return await query.FirstOrDefaultAsync(data => data.Id == Guid.Parse(id));
#pragma warning restore CS8603 // Possible null reference return.

        }

    }
}
