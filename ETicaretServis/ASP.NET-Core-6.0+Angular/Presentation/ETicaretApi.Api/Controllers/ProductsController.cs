using ETicaretApi.Application.Repositories;
using ETicaretApi.Application.RequestParameters;
using ETicaretApi.Application.ViewModels.Products;
using ETicaretApi.Domain.Entities;
using ETicaretApi.Persistence.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace ETicaretApi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        //[HttpGet]
        //public async Task Get()
        //{
        //    //var customerId = Guid.NewGuid();
        //    //_customerWriteRepository.AddAsync(new() { Id = customerId, Name = "Emre" });
        //    //_orderWriteRepository.AddAsync(new() { Description = "deneme 1", Address = "Aydın, Efeler", CustomerId = customerId });
        //    //_orderWriteRepository.AddAsync(new()
        //    //{
        //    //    Description = "deneme 2",
        //    //    Address =
        //    //"Denizli, Zeytinköy",
        //    //    CustomerId = customerId
        //    //});
        //    //_orderWriteRepository.SaveAsync();

        //    //Order qq = await _orderReadRepository.GetByIdAsync("336b58bd-0485-4785-9b85-39afc7ba3050");
        //    //qq.Address = "Antalya";
        //    //await _orderWriteRepository.SaveAsync();
        //    //    #region Deneme kodları kapatıldı.  


        //    //    /*
        //    //   _productWriteRepository.AddAsync(new() { Name = "C Product", Price = 1.500F, Stock = 10 });
        //    //   _productWriteRepository.SaveAsync();

        //    await _productWriteRepository.AddRangeAsync(new()
        //       {
        //           new (){Id=Guid.NewGuid(),Name="Product 1",Price=100,CreateDate=DateTime.UtcNow,Stock=10},
        //           new (){Id=Guid.NewGuid(),Name="Product 2",Price=120,CreateDate=DateTime.UtcNow,Stock=20},
        //           new (){Id=Guid.NewGuid(),Name="Product 3",Price=130,CreateDate=DateTime.UtcNow,Stock=15},
        //           new (){Id=Guid.NewGuid(),Name="Product 4",Price=140,CreateDate=DateTime.UtcNow,Stock=80}
        //       });
        //    var count = await _productWriteRepository.SaveAsync();

        //    // */
        //    //    #endregion
        //}
        [HttpGet]
        public IActionResult Get([FromQuery] Pagination pagination)
        {
            var totalCount = _productReadRepository.GetAll(false).Count();
            var a = _productReadRepository.GetAll(false).Skip(pagination.Page * pagination.Size).Take(pagination.Size).Select(p => new
            {
                p.Id,
                p.Name,
                p.Stock,
                p.Price,
                p.CreateDate,
                p.UpdateDate
            }).ToList();
            return Ok(new
            {
                totalCount,
                a
            });
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return Ok(_productReadRepository.GetByIdAsync(id, false));
        }
        [HttpPost]

        public async Task<IActionResult> Post(VM_Create_Product model)
        {
            await _productWriteRepository.AddAsync(new()
            {
                Name = model.NAme,
                Price = model.Price,
                Stock = model.Stock
            });
            await _productWriteRepository.SaveAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Put(VM_Update_Product model)
        {
            Product product = await _productReadRepository.GetByIdAsync(model.Id);
            product.Stock = model.Stock;
            product.Price = model.Price;
            product.Name = model.NAme;
            await _productWriteRepository.SaveAsync();
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _productWriteRepository.RemoveAsync(id);
            await _productWriteRepository.SaveAsync();

            return Ok();
        }
    }
}
