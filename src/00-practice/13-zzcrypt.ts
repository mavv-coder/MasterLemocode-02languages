console.log("************** PRACTICE 13 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ZZCRYPT *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Descifra el siguiente secreto sabiendo que el alfabeto original ha sufrido la
 * siguiente transformación.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const secret: string =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";
const plain: string = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const cipher: string = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const converser = (plain: string, cipher: string, character: string): string =>
  character !== " " ? plain[cipher.indexOf(character)] : " ";

const decrypt = (secret: string, plain: string, cipher: string): string => {
  let message: string = "";
  for (let i: number = 0; i < secret.length; i++)
    message += converser(plain, cipher, secret[i]);
  return message;
};

console.log(decrypt(secret, plain, cipher));
