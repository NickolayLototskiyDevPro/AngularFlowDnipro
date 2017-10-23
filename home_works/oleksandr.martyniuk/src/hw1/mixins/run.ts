import { Readable } from './readable';
import { Deletable } from './deletable';
import { Disposable } from './disposable';
import { Mixer } from './mixer';
import { applyMixins } from './apply-mixins';

applyMixins(Mixer, [Disposable, Deletable, Readable]);

var smm = new Mixer('3');
console.log(`Created: ${smm}`);
smm.delete();
console.log(`Deleted: ${smm}`);
smm.dispose();
console.log(`Disposed: ${smm}`);
smm = new Mixer('4');
console.log(`Created: ${smm}`);
smm.id = '2';
console.log(`After trying to reassign id: ${smm}`);