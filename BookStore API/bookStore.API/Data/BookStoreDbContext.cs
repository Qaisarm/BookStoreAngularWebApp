
using Microsoft.EntityFrameworkCore;

namespace BookStore.API.Data;


public class BookStoreDbContext : DbContext
{
public BookStoreDbContext(DbContextOptions options) : base(options)
{

}
public DbSet<Book> Books { get; set; }
public DbSet<Quote> Quotes { get; set; }
 public DbSet<User>? Users { get; set; }
}