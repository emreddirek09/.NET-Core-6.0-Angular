using ETicaretApi.Domain.Entities;
using ETicaretApi.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Persistence.Concretes
{
    public class Order : BaseEntity
    {
        public string Description { get; set; }
        public string Address { get; set; }

        //Çok-a Çok ilişkisi için ICollection tanımlanır. Karşılığında çok ilişki olursa diğer classda da aynı ICollection kurulur
        public ICollection<Product> Products { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
