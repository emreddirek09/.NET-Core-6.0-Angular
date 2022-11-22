using ETicaretApi.Domain.Entities;
using ETicaretApi.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Domain.Entities
{
    public class Customer : BaseEntity
    {
        public string Name { get; set; }
        //Çok ilişkisi için ICollection tanımlanır. Karşılığında tek ilişki olursa diğer classda da aynı "public Customer Customer { get; set; }" tanımlanır tekil olarak.
        public ICollection<Order> Orders { get; set; }

    }
}
