﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretApi.Application.ViewModels.Products
{
    public class VM_Update_Product
    {
        public string Id { get; set; }
        public string? NAme { get; set; }
        public int Stock { get; set; }
        public float Price { get; set; }
    }
}
