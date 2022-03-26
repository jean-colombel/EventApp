using KumojinAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
});
builder.Services.AddDbContext<EventContext>(opt => opt.UseInMemoryDatabase("EventsList"));
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors(options => options.AllowAnyOrigin());

app.UseAuthorization();

app.MapControllers();

app.Run();
