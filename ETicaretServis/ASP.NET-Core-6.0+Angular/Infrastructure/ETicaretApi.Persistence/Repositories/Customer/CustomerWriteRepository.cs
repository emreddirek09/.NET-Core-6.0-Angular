using ETicaretApi.Application.Repositories;
using ETicaretApi.Domain.Entities;
using ETicaretApi.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence.Repositories
{
    public class CustomerWriteRepository : WriteRepository<Customer>, ICustomerWriteRepository
    {
        public CustomerWriteRepository(ETicaretApiDbContext context) : base(context)
        {
        }
    }
}

//Unable to resolve service for type 'ETicaret Api.Application.Repositories.IProduct Write Repository' while attempting to activate 'ETicaretApi.Api.Controllers.ProductsController'.
