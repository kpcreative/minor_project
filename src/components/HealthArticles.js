import React from 'react';

function HealthArticles() {
  return (
    <div style={{ borderTop: '2px solid #ccc', borderBottom: '2px solid #ccc', display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
          
          {/* Main Info Card */}
          <div style={{ padding: '20px', maxWidth: '360px' }}>
            <h3 style={{ margin: 0, fontWeight: 'bold', fontSize: '30px' }}>Read top articles from health experts</h3>
            <p style={{ color: '#000', fontSize: '14px', marginTop: '5px' }}>
              Health articles that keep you informed about good health practices and achieve your goals.
            </p>
            <button type="button" className="btn btn-primary" style={{ marginTop: '30px' }}>See all articles</button>
          </div>

          {/* Article Card 1 */}
          <div style={{ maxWidth: '280px', padding: '10px' }}>
            <a href="/healthfeed/12-coronavirus-myths-and-facts-that-you-should-be-aware-of-40556/post?utm_source=google&utm_medium=cpc&utm_campaign=brand-search-practo-consult" style={{ display: 'block' }}>
              <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#d7d8e2' }}>
                <img
                  src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
                  alt="12 Coronavirus Myths and Facts That You Should Be Aware Of"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </a>
            <div style={{ color: '#007b00', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '15px' }}>Coronavirus</div>
            <h6 style={{ fontSize: '16px', margin: '5px 0', fontWeight: 'bold' }}>
              12 Coronavirus Myths and Facts That You Should Be Aware Of
            </h6>
            <p style={{ color: '#000', fontSize: '14px', marginTop: '10px' }}>Dr. Diana Borgio</p>
          </div>

          {/* Article Card 2 */}
          <div style={{ maxWidth: '280px', padding: '10px' }}>
            <a href="/healthfeed/eating-right-to-build-immunity-against-cold-and-viral-infections-40908/post?utm_source=google&utm_medium=cpc&utm_campaign=brand-search-practo-consult" style={{ display: 'block' }}>
              <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#d7d8e2' }}>
                <img
                  src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
                  alt="Eating Right to Build Immunity Against Cold and Viral Infections"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </a>
            <div style={{ color: '#007b00', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '15px' }}>Vitamins and Supplements</div>
            <h6 style={{ fontSize: '16px', margin: '5px 0', fontWeight: 'bold' }}>
              Eating Right to Build Immunity Against Cold and Viral Infections
            </h6>
            <p style={{ color: '#000', fontSize: '14px', marginTop: '10px' }}>Dr. Diana Borgio</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HealthArticles;
