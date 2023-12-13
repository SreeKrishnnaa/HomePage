import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
    {
        label: 'Hound Vault for Students',
        description: `This Vault is for the College Students. It helps students to store their materials online. Create an account of your own now! `,
    },
    {
        label: 'Clean and simple',
        description:
            'This website is simple,clean and user-friendly. No need of clumsy tutorials that are time consuming. Create your profile and seggregate your files online.',
    },
    {
        label: 'Avoid Sensitive Data !',
        description: `This site is developed solely for accompanying students along with their academic journey. Avoid storage of sensitive data as that would be vulnerable to our environment .`,
    },
];

export default function TextStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                marginTop: 16, // Adjusted top margin
            }}
        >
            <Box sx={{ maxWidth: 400, flexGrow: 1, width: '100%' }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: '#87CEFA', // Light Blue
                    }}
                >
                    <Typography>{steps[activeStep].label}</Typography>
                </Paper>
                <Box sx={{ height: 250, width: '92%', p: 2, bgcolor: '#DFC79A' }}>
                    {steps[activeStep].description}
                </Box>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                    sx={{
                        bgcolor: '#F5F5F5', // Beige/Grey background
                        p: 1, // Adjusted padding
                        mt: 1, // Adjusted top margin
                    }}
                />
            </Box>
        </Box>
    );
}
