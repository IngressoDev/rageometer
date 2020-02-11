// const MiBand = require('./miband2');

document.getElementById('connect').addEventListener('click', async () => {
  const device = await bluetooth.requestDevice({
    filters: [
      { services: [ MiBand.advertisementService ] }
    ],
    optionalServices: MiBand.optionalServices
  });
  
  const server = await device.gatt.connect();
  
  let miband = new MiBand(server);
  await miband.init();
  
  log('Notifications demo...')
  await miband.showNotification('message');
})