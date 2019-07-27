const largeStrings = [
  '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'
]
const SIZE = 6*1024*1024 // 6 MB

const writeToFile = (fs, data) => {
  return new Promise((resolve) => {
    fs.root.getFile('data', { create: true }, (fileEntry) => {
      fileEntry.createWriter((fileWriter) => {
        fileWriter.onwriteend = resolve

        var blob = new Blob([data], { type: 'text/plain' });
        fileWriter.write(blob);
      })
    })
  })
}

const runBenchmark = async (fs) => {
  const time = new Date()
  for (let i = 0; i < 200; i++) {
    for (let j = 0; j < largeStrings.length; j++) {
      await writeToFile(fs, largeStrings[j])
    }
  }
  return new Date() - time
}

const onInitFs = async (fs) => {
  const timings = []
  for (let i = 0; i < 100; i++) {
    timings.push(await runBenchmark(fs))
  }
  alert('ready')
  console.log(timings)
}

window.webkitRequestFileSystem(window.TEMPORARY, SIZE, onInitFs)
