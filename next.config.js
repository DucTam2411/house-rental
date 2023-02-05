/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            "links.papareact.com",
            "picsum.photos",
            "loremflickr.com",
            "images.pexels.com",
        ],
    },
    env: {
        mapbox_key:
            "pk.eyJ1Ijoic2lldW5oYW5kaWVucXVhbmcyNTExIiwiYSI6ImNsZG5qNjBoajBlaWEzcG80NmJnOGVxNnUifQ.n70K7f7SaJny3u-EP9YcYw",
    },
};
