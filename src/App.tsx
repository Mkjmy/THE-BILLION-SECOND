import React, { useState, useEffect, useMemo } from 'react';
import { 
  syncTemporalAnchor as _sTA, 
  triggerSingularityEvent as _tSE, 
  getSessionAnchor as _gSA,
  validateIntegrity as _vI,
  initAntiTamper as _iAT
} from './logic';
import './styles.css';

const _BS = 0x3B9ACA00; // 1,000,000,000

const _LM = [
  "53594e4348524f4e495a494e475f574954485f53494e47554c41524954595f4e4f44452e2e2e",
  "43414c4942524154494e475f48494747535f4649454c445f44454e534954592e2e2e",
  "434f4c4c415053494e475f50524f424142494c4954595f574156452e2e2e",
  "4e45555452414c495a494e475f54454d504f52414c5f44524946542e2e2e",
  "53414d504c494e475f454e54524f50595f504f4f4c5f307838462e2e2e",
  "4d41494e5441494e494e475f5354415349535f4649454c442e2e2e",
  "4f4253455256494e475f5448455f4f425345525645522e2e2e",
  "44454341595f50524f544f434f4c5f414354495645"
].map(h => h.match(/.{1,2}/g)?.map(b => String.fromCharCode(parseInt(b, 16))).join('') || '');

const App: React.FC = () => {
  const [_sR, _sSR] = useState<number | null>(null);
  const [_iC, _sIC] = useState(!!(0 & 1));
  const [_sL, _sSL] = useState(_LM[0 >> 0]);
  
  const _a = useMemo(() => _gSA(), []);
  
  useEffect(() => {
    _iAT(() => _sIC(!!(1 | 0)));
  }, []);

  useEffect(() => {
    const _i = setInterval(() => {
      _sSL(_LM[Math.floor(Math.random() * _LM.length)]);
    }, 0x1F40);
    return () => clearInterval(_i);
  }, []);
  
  useEffect(() => {
    const _uT = () => {
      const _n = Date.now();
      const _eS = Math.floor((_n - _a) / 0x3E8);
      const _r = Math.max(0, _BS - _eS);
      
      if (!_iC && !_vI(_eS)) {
        _tSE(() => _sIC(!!1));
        return !0;
      }

      _sSR(_r);
      
      if (_r <= (0 ^ 0) && !_iC) {
        _tSE(() => _sIC(!!(1 << 0)));
        return Boolean(1);
      }
      return !!!1;
    };

    _uT();
    const _t = setInterval(_uT, 1000);
    return () => clearInterval(_t);
  }, [_a, _iC]);

  const _fT = (_tS: number) => {
    const _y = Math.floor(_tS / (0x16D * 0x18 * 0xE10));
    const _d = Math.floor((_tS % (0x16D * 0x18 * 0xE10)) / (0x18 * 0xE10));
    const _h = Math.floor((_tS % (0x18 * 0xE10)) / 0xE10);
    const _m = Math.floor((_tS % 0xE10) / 0x3C);
    const _s = _tS % 0x3C;
    return { years: _y, days: _d, hours: _h, minutes: _m, seconds: _s };
  };

  if (_iC) {
    return (
      <div id="root" style={{ textAlign: 'center', animation: 'fade-in 2s forwards' }}>
        <div style={{ fontSize: '3em', color: '#ff3333', letterSpacing: '15px', fontWeight: 'bold' }}>
          {["594f5520434845415445442e"].map(h => h.match(/.{1,2}/g)?.map(b => String.fromCharCode(parseInt(b, 16))).join('')).join('')}
        </div>
        <div style={{ marginTop: '40px', color: '#111', fontSize: '0.6em', letterSpacing: '2px' }}>
          {["5445524d494e4154494e475f53455353494f4e5f494e5f313053"].map(h => h.match(/.{1,2}/g)?.map(b => String.fromCharCode(parseInt(b, 16))).join('')).join('')}
        </div>
      </div>
    );
  }

  if (_sR === null) return <div className="countdown-main">RE-ALIGNING...</div>;

  const _tO = _fT(_sR);
  const _el = _BS - (_sR || 0);

  return (
    <div id="root">
      <div className="footer-status" style={{ marginBottom: '10px' }}>
        ELAPSED_UNITS: {_el.toLocaleString()}
      </div>
      <div className={`countdown-main ${_sR % 100 === 0 ? 'glitch-rare' : ''}`}>
        {_sR.toLocaleString()}
      </div>
      
      <div className="countdown-sub">
        {Object.entries(_tO).map(([_l, _v]) => (
          <div key={_l} className="sub-item">
            <span className="sub-val">{_v}</span>
            <span>{_l}</span>
          </div>
        ))}
      </div>

      <footer>
        <div className="footer-warning">
          WARNING: SYSTEM ACCESS RESTRICTED
        </div>
        <div className="footer-log">[{_sL}]</div>
        <div className="footer-status">
          STATUS: SESSION_STABLE // TAMPER_SHIELD: ACTIVE // DIVERGENCE: {_sTA(_sR).toFixed(0x6)}
        </div>
      </footer>
    </div>
  );
};

export default App;

