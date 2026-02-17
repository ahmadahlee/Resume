const esbuild = require('esbuild');

try {
    esbuild.buildSync({
        entryPoints: ['src/resume_entry.js'],
        bundle: true,
        platform: 'node',
        outfile: 'src/generate_bundled_resume.js',
        external: ['fs', 'path', 'util', 'stream', 'http', 'https', 'zlib', 'url', 'assert', 'crypto'],
        loader: { '.js': 'jsx' },
        inject: ['src/react-shim.js']
    });
    console.log('Build complete');
} catch (e) {
    console.error('Build failed:', e);
    process.exit(1);
}
