// export default () => fetch('/data/tickets.json', {mode: 'cors'}).then(data => data.json());

export default () =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch('/data/tickets.json', { mode: 'cors' }).then(data => data.json())
        resolve(res)
      } catch (error) {
        reject(error)
      }
    }, 600)
  })
