module.exports = {
  images: {
    domains: ['upload.wikimedia.org', 'fakestoreapi.com', 'brand.assets.adidas.com', 'assets.adidas.com', 'image.goat.com']
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  },
  dllPlugin: {
    defaults: {
      exclude: [
        'stripe'
      ]
    }
  }
}
