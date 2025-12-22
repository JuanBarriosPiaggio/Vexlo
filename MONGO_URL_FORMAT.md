# MongoDB Connection String Format

## Correct Format Examples

### Standard MongoDB Connection:
```
mongodb://username:password@host:port/database?options
```

### MongoDB Atlas (Cloud):
```
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

### Local MongoDB:
```
mongodb://localhost:27017/vexlo
```

### With Authentication:
```
mongodb://user:password@host:27017/vexlo?authSource=admin
```

## Common Issues

1. **Missing slash before database name:**
   - ❌ Wrong: `mongodb://host:port?options`
   - ✅ Correct: `mongodb://host:port/database?options`

2. **Special characters in password:**
   - If your password contains special characters like `@`, `:`, `/`, `?`, `#`, `[`, `]`, you must URL-encode them:
   - `@` → `%40`
   - `:` → `%3A`
   - `/` → `%2F`
   - `?` → `%3F`
   - `#` → `%23`
   - `[` → `%5B`
   - `]` → `%5D`

3. **Missing database name:**
   - ❌ Wrong: `mongodb://host:port`
   - ✅ Correct: `mongodb://host:port/database`

## Railway MongoDB Setup

If using Railway's MongoDB service:
1. Get the connection string from Railway dashboard
2. It should look like: `mongodb://mongo:27017/vexlo` (for internal) or `mongodb://user:pass@host:port/db` (for external)
3. Make sure the database name is included after the `/`

## Testing Your Connection String

You can test your connection string format by checking:
- Does it start with `mongodb://` or `mongodb+srv://`?
- Is there a `/` before the database name?
- Are special characters in passwords URL-encoded?

