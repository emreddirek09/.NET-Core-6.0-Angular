using ETicaretApi.Application.ViewModels.Products;
using FluentValidation;

namespace ETicaretApi.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.NAme).NotEmpty().NotNull()
                .WithMessage("Lütfen Ürünün adını giriniz.")
                .MaximumLength(150)
                .MinimumLength(5)
                .WithMessage("Lütfen Ürün adını 5-150 karekter arasında giriniz.");

            RuleFor(p => p.Stock).NotNull().NotNull()
                .WithMessage("Lütfen stok bilgisini boş geçmeyiniz.")
                .Must(s => s >= 0)
                .WithMessage("Stok Bilgisi negatif olamaz");

            RuleFor(p => p.Price).NotNull().NotNull()
                .WithMessage("Lütfen fiyat bilgisini boş geçmeyiniz.")
                .Must(s => s >= 0)
                .WithMessage("Fiyat Bilgisi negatif olamaz");
        }
    }
}
