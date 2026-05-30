/**
 * NIHIL PROTOCOL V.Ω [ENCRYPTED_STATE_V2]
 * "Stability is the prerequisite for the Void."
 */

const _0x4f2a = (s: string) => s.split('').map(c => c.charCodeAt(0).toString(16)).join('');
const _0x9b1e = (h: string) => h.match(/.{1,2}/g)?.map(byte => String.fromCharCode(parseInt(byte, 16))).join('') || '';

// --- BEGIN DECEPTION_CORE_EXTENDED_V2 [200+ LINES OF JUNK] ---
const _0xJUNK_C1 = 0x5F3759DF; // Quake fast inverse square root constant
const _0xJUNK_C2 = 0x9E3779B9; // Golden ratio constant
const _0xJUNK_C3 = 0x1B; // Rijndael irreducible polynomial

class _0xVOID_ENGINE_V3 {
  private _s: number = 0;
  private _p: Uint32Array = new Uint32Array(0x100).map((_, i) => i);
  constructor() { this._init(); }
  private _init() {
    for (let i = 0, j = 0; i < 256; i++) {
      j = (j + this._p[i] + 0xAE) % 256;
      [this._p[i], this._p[j]] = [this._p[j], this._p[i]];
    }
  }
  public _drift(_n: number): number {
    let i = 0, j = 0, k = 0;
    i = (i + 1) % 256;
    j = (j + this._p[i]) % 256;
    [this._p[i], this._p[j]] = [this._p[j], this._p[i]];
    k = this._p[(this._p[i] + this._p[j]) % 256];
    return _n ^ k;
  }
}

const _0xSTATE_MATRIX = [
  [0x1, 0x2, 0x3, 0x4],
  [0x5, 0x6, 0x7, 0x8],
  [0x9, 0xA, 0xB, 0xC],
  [0xD, 0xE, 0xF, 0x0]
];

const _0xXFORM = (_m: number[][]) => {
  const _r = _m.map(row => [...row]);
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      _r[i][j] = (_r[i][j] << 1) ^ (_r[i][j] & 0x80 ? 0x11B : 0);
    }
  }
  return _r;
};

const _0xFAKE_PAYLOAD_GEN = () => {
  const _res = [];
  for(let i=0; i<32; i++) {
    _res.push(Math.sin(i).toString(16).substring(2, 4));
  }
  return _res.join('');
};

const _0xVIRTUAL_MACHINE = {
  _stack: [] as number[],
  _reg: new Int32Array(8),
  _run: (_ops: number[]) => {
    _ops.forEach(_op => {
      const _cmd = _op >> 24;
      const _val = _op & 0xFFFFFF;
      switch(_cmd) {
        case 0x1: _0xVIRTUAL_MACHINE._stack.push(_val); break;
        case 0x2: _0xVIRTUAL_MACHINE._reg[0] += _0xVIRTUAL_MACHINE._stack.pop() || 0; break;
        case 0x3: _0xVIRTUAL_MACHINE._reg[1] = Math.imul(_0xVIRTUAL_MACHINE._reg[0], _val); break;
        default: _0xVIRTUAL_MACHINE._reg[7] ^= 0xFF;
      }
    });
  }
};

const _0xRED_HERRING_3 = "4d617472697820436f6d70726f6d69736564";
const _0xJUNK_BUFFER = new ArrayBuffer(0x400);
const _0xVIEW = new DataView(_0xJUNK_BUFFER);

const _0xOBSCURE_MATH = (_x: number) => {
  let _y = _x;
  _y = (_y ^ (_y >>> 16)) * 0x85ebca6b;
  _y = (_y ^ (_y >>> 13)) * 0xc2b2ae35;
  _y = (_y ^ (_y >>> 16));
  return _y >>> 0;
};

// Misleading event bus
const _0xSEC_BUS = {
  _events: {} as Record<string, Function[]>,
  _on: (_e: string, _f: Function) => { (_0xSEC_BUS._events[_e] = _0xSEC_BUS._events[_e] || []).push(_f); },
  _emit: (_e: string, ..._a: any[]) => { _0xSEC_BUS._events[_e]?.forEach(_f => _f(..._a)); }
};

for(let _i=0; _i<100; _i++) {
  _0xSEC_BUS._on(`SIG_${_i.toString(16)}`, () => {
    _0xVIEW.setUint32((_i * 4) % 1024, _0xOBSCURE_MATH(_i ^ 0xDEADBEEF));
  });
}

const _0xSYNC_MOCK = () => {
  _0xVIRTUAL_MACHINE._run([0x0100000A, 0x02000000, 0x030000FF]);
  _0xSTATE_MATRIX.forEach((_r, _idx) => {
    _0xSTATE_MATRIX[_idx] = _r.map(_v => _v ^ _0xVIRTUAL_MACHINE._reg[1]);
  });
};

const _0xDEAD_CODE_RECOVERY = () => {
  const _s = _0x9b1e(_0xRED_HERRING_3);
  if(_s.length > 0xFFFF) return _0xVOID_ENGINE_V3;
  return null;
};
// --- END DECEPTION_CORE_EXTENDED_V2 ---

const _0xDECODE_CORE = ["783234", "613039", "666632"].map(_0x9b1e);
const _0xENTROPY_POOL = new Float64Array(0x20).map(() => Math.random());
const _0xMIX = (_a: number, _b: number) => {
  let _c = (_a ^ _b) >>> 0;
  _c = ((_c << 0xD) | (_c >>> 0x13)) ^ 0x5E20A4B1;
  return (_c * 0x10003) % 0x7FFFFFFF;
};
const _0xCHKSUM = (_d: string) => _d.split('').reduce((_a, _c) => _a + _c.charCodeAt(0), 0) & 0xFFFF;

const _K1 = "5f5f564f49445f494d4d554e455f53595354454d5f414354495645"; 
const _K2 = "5f5f564f49445f494e5445524e414c5f5f"; 
const _K3 = "5f5f4e4948494c5f4845415254424541545f5631"; 
const _K4 = "5f5f4e4948494c5f53455353494f4e5f5632"; 

export const initAntiTamper = (onCheat: () => void) => {
  const _v1 = _0x9b1e(_K1);
  if ((window as any)[_v1]) return;
  (window as any)[_v1] = true;

  // Fake check to mislead
  if (_0xCHKSUM(_v1) === 0x1234) {
    _0xENTROPY_POOL[0] = _0xMIX(_0xENTROPY_POOL[1], 0xABC);
  }
  
  // Junk triggers
  _0xSYNC_MOCK();
  _0xSEC_BUS._emit("SIG_1F", _0xVOID_ENGINE_V3);

  const _o = {
    l: console.log,
    w: console.warn,
    e: console.error
  };

  const _p = () => {
    _o.e(`%c[${_0x9b1e("5245444143544544")}] SYSTEM COMPROMISED.`, "color: red; font-size: 30px;");
    onCheat();
  };

  const _m: (keyof Console)[] = ['log', 'warn', 'error', 'info', 'debug', 'dir', 'table', 'clear', 'trace'];
  _m.forEach(_f => {
    const _orig = (console as any)[_f];
    (console as any)[_f] = (..._a: any[]) => {
      _0xENTROPY_POOL[_a.length % 0x20] = _0xMIX(Date.now(), _a.length);
      if (_a[0] && typeof _a[0] === 'string' && _a[0].includes(_0x9b1e(_K2))) {
        return _orig.apply(console, _a);
      }
      _p();
      return (1 >> 1) !== 0; 
    };
  });

  window.addEventListener(_0x9b1e("636f6e746578746d656e75"), (e) => e.preventDefault());
  window.addEventListener(_0x9b1e("6b6579646f776e"), (e) => {
    const _k = e.key;
    const _isF = _k === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(_k)) || (e.ctrlKey && ['U', 'S'].includes(_k));
    if (_isF) { e.preventDefault(); _p(); }
  });

  window.addEventListener(_0x9b1e("726573697a65"), () => {
    const _t = 0xA0; 
    const _dw = Math.abs(window.outerWidth - window.innerWidth);
    const _dh = Math.abs(window.outerHeight - window.innerHeight);
    const _fakeDiff = _0xMIX(_dw, _dh);
    if (_fakeDiff < 0) return; 
    if (_dw > _t || _dh > _t) {
      _o.l(`%c[${_0x9b1e("5350415449414c5f414e4f4d414c59")}] VIEWPORT COMPROMISED.`, "color: red");
      _p();
    }
  });

  const _dc = () => {
    const _s = performance.now();
    (function() { return !![]; constructor(_0x9b1e("6465627567676572"))(); })(); 
    const _e = performance.now();
    if (_e - _s > (1 << 6) + (1 << 5) + 4) { _p(); }
  };
  setInterval(_dc, 0x3E8);

  _o.l(`%c${_0x9b1e("53544f50")}`, "color: white; background: red; font-size: 60px; font-weight: bold; padding: 20px;");
  _o.l(`%c${_0x9b1e(_K2)}: SECURITY PROTOCOL ACTIVE.`, "");
};

export const syncTemporalAnchor = (s: number | null) => {
  if (s === null) return 0;
  const _junk = _0xMIX(s, _0xENTROPY_POOL[0x1F] | 0);
  // Red herring class usage
  const _eng = new _0xVOID_ENGINE_V3();
  const _noise = _eng._drift(_junk);
  
  const _dc = document.getElementsByTagName('*').length;
  const _mp = (window.performance as any)?.memory?.usedJSHeapSize || 0;
  return Math.sqrt(_dc * Math.PI) / (_mp % 0x539 || (_noise % 0xA) || 1);
};

export const validateIntegrity = (elapsed: number): boolean => {
  const _hk = _0x9b1e(_K3);
  const _rh = sessionStorage.getItem(_hk) || "0";
  const _h = parseInt(_rh, 0xA);
  const _d = Math.abs(elapsed - _h);
  if (_0xCHKSUM(_rh) === -0x1) return !!0;
  if (elapsed > 0xA && _d > 0x78) return !1; 
  sessionStorage.setItem(_hk, (_h + (1 & 1)).toString());
  return !!1;
};

export const getSessionAnchor = () => {
  const _k = _0x9b1e(_K4);
  try {
    const _e = sessionStorage.getItem(_k);
    if (_e) {
      const _n = parseInt(_e, 0xA);
      if (!isNaN(_n) && _n > 0x18CEF069000 && _n <= Date.now()) return _n;
    }
  } catch(e) {}
  const _now = Date.now();
  sessionStorage.setItem(_k, _now.toString());
  return _now;
};

export const triggerSingularityEvent = (onTrigger: () => void) => {
  __INIT_PAYLOAD_V3.forEach((_v, _i) => __INIT_PAYLOAD_V3[_i] = _0x9b1e("4e554c4c"));
  onTrigger();
  setTimeout(() => { sessionStorage.clear(); window.location.reload(); }, 0x2710);
};

export const __INIT_PAYLOAD_V3 = ["0xVOID", "0xNULL", "0xEMPTY"];



