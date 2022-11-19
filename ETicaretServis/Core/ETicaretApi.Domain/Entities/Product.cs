﻿using ETicaretApi.Domain.Entities.Common;
using ETicaretApi.Persistence.Concretes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public int Stock { get; set; }
        public long Price { get; set; }

        //Çok-a Çok ilişkisi için ICollection tanımlanır. Karşılığında çok ilişki olursa diğer classda da aynı ICollection kurulur
        public ICollection<Order> Orders { get; set; }
    }
}
