using ETicaretApi.Application.Repositories;
using ETicaretApi.Domain.Entities;
using ETicaretApi.Persistence.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretApi.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;
        readonly private ICustomerWriteRepository _customerWriteRepository;
        readonly private ICustomerReadRepository _customerReadRepository;

        readonly private IOrderWriteRepository _orderWriteRepository;
        readonly private IOrderReadRepository _orderReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository, ICustomerWriteRepository customerWriteRepository, ICustomerReadRepository customerReadRepository, IOrderWriteRepository orderWriteRepository, IOrderReadRepository orderReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            _customerWriteRepository = customerWriteRepository;
            _customerReadRepository = customerReadRepository;
            _orderWriteRepository = orderWriteRepository;
            _orderReadRepository = orderReadRepository;
        }

        [HttpGet]
        //public async Task Get()
        //{
        //    var customerId = Guid.NewGuid();
        //    _customerWriteRepository.AddAsync(new() { Id = customerId, Name = "Emre" });
        //    _orderWriteRepository.AddAsync(new() { Description = "deneme 1", Address = "Aydın, Efeler", CustomerId = customerId });
        //    _orderWriteRepository.AddAsync(new() { Description = "deneme 2", Address = "Denizli, Zeytinköy", CustomerId = customerId });
        //    _orderWriteRepository.SaveAsync();

        //    //Order qq = await _orderReadRepository.GetByIdAsync("336b58bd-0485-4785-9b85-39afc7ba3050");
        //    //qq.Address = "Antalya";
        //    //await _orderWriteRepository.SaveAsync();
        //    //    #region Deneme kodları kapatıldı.  


        //    //    /*
        //    //   _productWriteRepository.AddAsync(new() { Name = "C Product", Price = 1.500F, Stock = 10 });
        //    //   _productWriteRepository.SaveAsync();

        //    //   await _productWriteRepository.AddRangeAsync(new()
        //    //   {
        //    //       new (){Id=Guid.NewGuid(),Name="Product 1",Price=100,CreateDate=DateTime.UtcNow,Stock=10},
        //    //       new (){Id=Guid.NewGuid(),Name="Product 2",Price=120,CreateDate=DateTime.UtcNow,Stock=20},
        //    //       new (){Id=Guid.NewGuid(),Name="Product 3",Price=130,CreateDate=DateTime.UtcNow,Stock=15},
        //    //       new (){Id=Guid.NewGuid(),Name="Product 4",Price=140,CreateDate=DateTime.UtcNow,Stock=80}
        //    //   });
        //    //   var count = await _productWriteRepository.SaveAsync();

        //    // */
        //    //    #endregion
        //}
        [HttpGet]
        public async Task<IActionResult> GetByIdProduct()
        {
            Order product = await _orderReadRepository.GetByIdAsync("336b58bd-0485-4785-9b85-39afc7ba3050");
            return Ok(product);
        }
    }
}
