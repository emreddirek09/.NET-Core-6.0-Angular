 
using ETicaretApi.Application.Validators.Products;
using ETicaretApi.Persistence;
using FluentValidation.AspNetCore;
using ETicaretApi.Infrastructure.Filters;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddPersistenceServices();
// Add services to the container. 
builder.Services.AddControllers(options => options.Filters.Add<ValidationFilter>())
    .AddFluentValidation(configuration => configuration.RegisterValidatorsFromAssemblyContaining<CreateProductValidator>())
    .ConfigureApiBehaviorOptions(op=>op.SuppressModelStateInvalidFilter=true);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//Bu yapý tüm gelen istekleri þartsýz kabul etmesi için. Geçerli bir yöntem deðil
builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
//builder.Services.AddCors(options => options.AddDefaultPolicy(policy => 
//policy.WithOrigins("http://localhost:4200/", "http://localhost:4200/").AllowAnyHeader().AllowAnyMethod()));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run(); 