# Thumbnails Directory Structure

## Recommended Structure:
```
thumbnails/
├── personal/           # Personal projects thumbnails
│   ├── yolodolabel.jpg
│   └── unity-backend.jpg
└── README.md
```

## Image Guidelines:
- **Format**: .jpg or .webp for best optimization
- **Resolution**: 800x600px or 16:9 aspect ratio
- **File Size**: < 200KB per image
- **Naming**: Use kebab-case (e.g., `my-project-name.jpg`)

## Usage:
Place your project thumbnail images in this directory and reference them in porto.json like:
```json
{
  "thumbnail": "/thumbnails/personal/your-image.jpg"
}
```

The website will automatically display these images with a blur background effect when aspect ratios don't match the container.