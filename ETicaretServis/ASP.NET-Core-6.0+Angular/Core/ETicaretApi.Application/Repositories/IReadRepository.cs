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

        IQueryable<T> GetAll(bool tracking=true); //Hangi türde class ise örneğin protuct gelirse tüm ürünleri verir.

        //Şarta uygun verileri getiriyor.
        IQueryable<T> GetWhere(Expression<Func<T, bool>> method, bool tracking = true);

        Task<T> GetSingleAsync(Expression<Func<T, bool>> method, bool tracking = true);

        Task<T> GetByIdAsync(string id, bool tracking = true);

        //InMemoryde ise List<>


    }
}
