import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informnacion del sistema operativo:')
console.log('---------------------------------------')

console.log('Nombre del SO', platform())
console.log('Version del SO', release())
console.log('arquitectura del SO', arch())
console.log('CpUs', cpus())
console.log('Memoria libre', freemem())
console.log('Memoria total', totalmem())
console.log('uptime', uptime() / 60 / 60)
