function Videos() {
    return (
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-14">
                <h2 className="h2 mb-4">Videos</h2>
                
              </div>
              {/* Items */}
              <div className="mx-auto">
              <iframe className="block" src="https://drive.google.com/file/d/1Pp1uf2EfpJY_UaxEPM2c5FHC26ljEvN1/preview" width="640" height="480" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Videos;
  
