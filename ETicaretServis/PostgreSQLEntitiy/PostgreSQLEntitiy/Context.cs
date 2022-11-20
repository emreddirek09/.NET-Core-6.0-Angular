using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PostgreSQLEntitiy
{
    public class Context : DbContext
    {
        public Context():base("Server=localhost;Database=DBBirimPersonel;User Id=postgres;Password=123456;") 
        { 
        
        }
        public DbSet<Personel> Personels { get; set; }  
        public DbSet<Birim> Birims { get; set; }  
        
    }
}
