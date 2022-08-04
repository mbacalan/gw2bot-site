* Download WebP CLI from:  
  https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html
  and add the webp scripts to your environment variables


* cd to image directory in bash:  
  `@/assets/img/`


* Run command to compress individual image as webp format:  
  `cwebp -q 75 -m 6 -mt -af image-name.jpg -o image-name.webp`
  
  Or run shell script to compress all images in current working directory to webp format:  
  `bash webp-convert-directory.sh`


> `-q 75` - 75% quality (default)
> 
> `-m 6` - slowest encoding speed, but yields best compression ratio (worth waiting)
> 
> `-mt` - enable multi-threading
> 
> `-af` - enable auto-filter for better optimized filtering strength


see all flags here:
https://developers.google.com/speed/webp/docs/cwebp
