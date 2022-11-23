using ETicaretApi.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Application.Repositories
{
    public interface IReadRepository<T> : IRepository<T> where T : BaseEntity
    {
        // Read==Select

        //Sorgu üzerinde ise IQueryableIQueryable;

        IQueryable<T> GetAll(); //Hangi türde class ise örneğin protuct gelirse tüm ürünleri verir.

        //Şarta uygun verileri getiriyor.
        IQueryable<T> GetWhere(Expression<Func<T, bool>> method);

        Task<T> GetSingleAsync(Expression<Func<T, bool>> method);

        public async Task<T> GetByIdAsync(string id) => await Table.FindAsync(id);

        //InMemoryde ise List<>


    }
}
