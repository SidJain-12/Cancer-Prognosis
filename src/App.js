import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Select, MenuItem, InputLabel, FormControl, Container, Box, Button, Input } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './App.css';

const cancerImages = {
  BLCA: "/images/BLCA_transformer_plot.png",
  BRCA: "/images/BRCA_transformer_plot.png",
  CESC: "/images/CESC_transformer_plot.png",
  COAD: "/images/COAD_transformer_plot.png",
  GBM: "/images/GBM_transformer_plot.png",
  HNSC: "/images/HNSC_transformer_plot.png",
  KIRC: "/images/KIRC_transformer_plot.png",
  KIRP: "/images/KIRP_transformer_plot.png",
  LGG: "/images/LGG_transformer_plot.png",
  LIHC: "/images/LIHC_transformer_plot.png",
  LUAD: "/images/LUAD_transformer_plot.png",
  LUSC: "/images/LUSC_transformer_plot.png",
  OV: "/images/OV_transformer_plot.png",
  SKCM: "/images/SKCM_transformer_plot.png",
  STAD: "/images/STAD_transformer_plot.png",
  UCEC: "/images/UCEC_transformer_plot.png",
};

const cancerImagesWithStar = {
  BLCA: "/images/BRCA_transformer_plot_star.png",
  BRCA: "/images/BRCA_transformer_plot_star.png",
  CESC: "/images/BRCA_transformer_plot_star.png",
  COAD: "/images/BRCA_transformer_plot_star.png",
  GBM: "/images/BRCA_transformer_plot_star.png",
  HNSC: "/images/BRCA_transformer_plot_star.png",
  KIRC: "/images/BRCA_transformer_plot_star.png",
  KIRP: "/images/BRCA_transformer_plot_star.png",
  LGG: "/images/BRCA_transformer_plot_star.png",
  LIHC: "/images/BRCA_transformer_plot_star.png",
  LUAD: "/images/BRCA_transformer_plot_star.png",
  LUSC: "/images/BRCA_transformer_plot_star.png",
  OV: "/images/BRCA_transformer_plot_star.png",
  SKCM: "/images/BRCA_transformer_plot_star.png",
  STAD: "/images/BRCA_transformer_plot_star.png",
  UCEC: "/images/BRCA_transformer_plot_star.png",
};

function App() {
  const [selectedCancer, setSelectedCancer] = useState('BRCA');
  const [fileName, setFileName] = useState('');
  const [isFileUploaded, setIsFileUploaded] = useState(false); // Track whether a file is uploaded

  const handleSelectChange = (e) => {
    setSelectedCancer(e.target.value);
    setIsFileUploaded(false); // Reset the uploaded state when cancer type is changed
  };

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setIsFileUploaded(false);
    }
  };

  const handleSubmit = () => {
    if (fileName) {
      setIsFileUploaded(true); // Show tick when the file is submitted
    }
  };

  const handleClear = () => {
    setSelectedCancer('BRCA'); // Reset the cancer selection to default
    setFileName(''); // Clear the selected file
    setIsFileUploaded(false); // Reset file upload status
    
    document.querySelector('input[type="file"]').value = ''; 
  };
  

  return (
    <div className="App">
      {/* Header with MUI AppBar */}
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', height: '9vh' }}>
          <Box display="flex" alignItems="center">
            <img src="/iiit-h.jpg" alt="Logo 1" style={{ width: 'auto', height: '60px' }} />
          </Box>

          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Deep learning based cancer prognosis using somatic mutation profile
          </Typography>

          <Box display="flex" alignItems="center" >
            <img src="/ihub.svg" alt="Logo 2" style={{ width: 'auto', height: '50px', backgroundColor: 'white' }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Box className="content">
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            {/* Dropdown (Left) */}
            <Grid item xs={12} sm={4}>
              <Box sx={{ mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="cancer-select-label">Select a Cancer Type</InputLabel>
                  <Select
                    labelId="cancer-select-label"
                    value={selectedCancer}
                    label="Select a Cancer Type"
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="BLCA">Bladder Urothelial Carcinoma (BLCA)</MenuItem>
                    <MenuItem value="BRCA">Breast Invasive Carcinoma (BRCA)</MenuItem>
                    <MenuItem value="CESC">Cervical Squamous Cell Carcinoma (CESC)</MenuItem>
                    <MenuItem value="COAD">Colon Adenocarcinoma (COAD)</MenuItem>
                    <MenuItem value="GBM">Glioblastoma Multiforme (GBM)</MenuItem>
                    <MenuItem value="HNSC">Head and Neck Squamous Cell Carcinoma (HNSC)</MenuItem>
                    <MenuItem value="KIRC">Kidney Renal Clear Cell Carcinoma (KIRC)</MenuItem>
                    <MenuItem value="KIRP">Kidney Renal Papillary Cell Carcinoma (KIRP)</MenuItem>
                    <MenuItem value="LGG">Lower Grade Glioma (LGG)</MenuItem>
                    <MenuItem value="LIHC">Liver Hepatocellular Carcinoma (LIHC)</MenuItem>
                    <MenuItem value="LUAD">Lung Adenocarcinoma (LUAD)</MenuItem>
                    <MenuItem value="LUSC">Lung Squamous Cell Carcinoma (LUSC)</MenuItem>
                    <MenuItem value="OV">Ovarian Serous Cystadenocarcinoma (OV)</MenuItem>
                    <MenuItem value="SKCM">Skin Cutaneous Melanoma (SKCM)</MenuItem>
                    <MenuItem value="STAD">Stomach Adenocarcinoma (STAD)</MenuItem>
                    <MenuItem value="UCEC">Uterine Corpus Endometrial Carcinoma (UCEC)</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Upload Section */}
              <Box sx={{ mt: 4 }}>
                <FormControl fullWidth>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Click on the "Choose File" button to upload a file:
                  </Typography>
                  <Input
                    type="file"
                    onChange={handleFileUpload}
                    disableUnderline
                    sx={{
                      border: '1px solid rgba(0, 0, 0, 0.23)',
                      borderRadius: 1,
                      padding: '10px',
                      width: '100%',
                      '&:hover': {
                        borderColor: 'black',
                      },
                    }}
                  />
                  {/* Display selected file or "No file chosen" */}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {fileName ? fileName : 'No file chosen'}

                  </Typography>
                </FormControl>

                {/* Submit and Clear Buttons */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                  >
                    Submit
                    {isFileUploaded && <CheckCircleIcon sx={{ color: 'green', fontSize: 20 }} />}
                  </Button>

                  {/* Clear Button */}
                  <Button
                    variant="outlined"
                    onClick={handleClear}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
                  >
                    Clear
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Image Display */}
            <Grid item xs={12} sm={8}>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                {/* Image Display */}
                <img
                  src={isFileUploaded ? cancerImagesWithStar[selectedCancer] : cancerImages[selectedCancer]}
                  alt={`${selectedCancer} cancer`}
                  style={{ width: '100%', height: 'auto', maxWidth: '500px', borderRadius: '8px' }}
                />
                <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
                  Kaplan-Meier (KM) plots for patients stratified into groups according to our model
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <footer>
        <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
          Computational Diagnostics Center
        </Typography>
      </footer>
    </div >
  );
}

export default App;