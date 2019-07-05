function loader (source) {
    console.log('--- loader begin ----');
    source = source.replace(/111/g, "222");
    console.log(source, 'source')
    console.log('--- loader end ----\n');
    return source;
}

module.exports = loader;
