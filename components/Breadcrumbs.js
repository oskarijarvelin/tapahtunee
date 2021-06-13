import React from 'react';
import Link from '../components/Link.js';
import { Container, Box, Breadcrumbs as MuiBreadcrumbs, Typography } from '@material-ui/core';

export default function Breadcrumbs({ parents }) {
    return (
        <Container maxWidth="sm">
            <Box pt={{xs:6, md:12}}>
                <MuiBreadcrumbs aria-label="breadcrumb">
                    <Link href="/">Tapahtunee-podcast</Link>
                        {parents && parents.map((parent, i) => (
                            <Link key={i} href={parent.url}>{parent.title}</Link>
                        ))}
                    <Typography color="textPrimary" />
                </MuiBreadcrumbs>
            </Box>
        </Container>
    );
}