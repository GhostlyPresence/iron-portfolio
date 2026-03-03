# Setting Up 404 Page

A custom 404 page created for your portfolio. Here's how to use it based on your hosting:

## For GitHub Pages
GitHub Pages automatically serves `404.html` when a page is not found, so no additional setup is needed. Simply push your changes and it will work automatically.

## For Local Development (Python)
When running:
```bash
python -m http.server 8000
```
The default Python server won't automatically serve 404.html. For testing, you can manually navigate to:
```
http://localhost:8000/404.html
```

For a better development experience, you can use a package like `http-server`:
```bash
npm install -g http-server
http-server
```

Or use this Python one-liner that respects 404.html:
```bash
python -m http.server --directory . 8000
# Then test with a non-existent URL like http://localhost:8000/fake-page
```

## For Other Static Servers

### Netlify
Netlify automatically detects and serves 404.html - no configuration needed.

### Vercel
Create a `vercel.json` file in your root:
```json
{
  "routes": [
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ]
}
```

### Apache (.htaccess)
Add this to your `.htaccess` file:
```
ErrorDocument 404 /404.html
```

### Nginx
Add this to your server configuration:
```nginx
error_page 404 /404.html;
location = /404.html {
  internal;
}
```

## Customization

The 404 page can be customized in `styles.css` under the `.not-found` class. Feel free to modify colors, text, and animations to match your preferences.

The page includes:
- Fantasy-themed error message
- Direct navigation links to main sections
- Animated forest tree illustration
- Responsive design for all devices
