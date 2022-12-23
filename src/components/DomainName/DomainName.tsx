import React from 'react'
import { useFormik } from "formik";
import { FormControl, FormGroup, Grid, TextField } from "@mui/material";
import s from './DomainName.module.scss'
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getUserProfile } from '../../store/profile/thunks';
import { useNavigate } from 'react-router-dom';

type PropsType = {
    setDomain: (value: string) => void
}

export const DomainName: React.FC<PropsType> = ({ setDomain }) => {

    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(state => state.app.statusLoading)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            setDomain(values.name)
            dispatch(getUserProfile(values.name, navigate))
        },
    })

    return (
        <Grid container justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl >
                    <h1> Domain search</h1>
                    <FormGroup >
                        <TextField label="name"
                            placeholder='Enter name...'
                            margin="normal"
                            variant="standard"
                            {...formik.getFieldProps('name')} />

                        <button
                            type='submit'
                            className={s.button__submit}
                            disabled={!formik.dirty}
                        >
                            {
                                isLoggedIn ?
                                    <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
                                    : 'Search'
                            }
                        </button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    )
}
