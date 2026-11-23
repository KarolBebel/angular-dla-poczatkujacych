const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Sprawdzam środowisko warsztatowe...\n');
let ok = true;

try {
  const v = process.version;
  const major = parseInt(v.slice(1).split('.')[0], 10);
  if (major >= 20) console.log(`✅ Node.js ${v}`);
  else { console.log(`❌ Node.js ${v} – wymagany >= 20`); ok = false; }
} catch { console.log('❌ Node.js nie znaleziony'); ok = false; }

try {
  const npm = execSync('npm -v', { encoding: 'utf8' }).trim();
  console.log(`✅ npm ${npm}`);
} catch { console.log('❌ npm nie znaleziony'); ok = false; }

if (fs.existsSync('node_modules')) console.log('✅ node_modules istnieje');
else { console.log('⚠️  Brak node_modules – uruchom: npm ci'); ok = false; }

console.log(ok
  ? '\n🎉 Środowisko gotowe! Możesz uruchomić: npm start'
  : '\n⚠️  Popraw powyższe problemy lub użyj wersji StackBlitz z README.');

process.exit(ok ? 0 : 1);