import React, { useState } from 'react'
import { Button, createStyles, makeStyles } from '@material-ui/core'
import LinkInfoEditor from '../widgets/LinkInfoEditor'
import ModalMargins from './ModalMargins'

const useStyles = makeStyles((theme) =>
  createStyles({
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      marginBottom: 50,
    },
    skipButton: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        maxWidth: 135,
      },
    },
    saveButton: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        maxWidth: 135,
      },
    },
  }),
)

type AddDescriptionFormProps = {}

export default function AddDescriptionForm(_: AddDescriptionFormProps) {
  const classes = useStyles()
  const [contactEmail, setContactEmail] = useState('')
  const [isContactEmailValid, setIsContactEmailValid] = useState(true)
  const [description, setDescription] = useState('')
  const [isDescriptionValid, setIsDescriptionValid] = useState(true)
  const onContactEmailChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContactEmail(event.target.value)
  const onDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.target.value)

  const isBothFieldsBlank = contactEmail === '' && description === ''
  const isContainsInvalidField = !(isContactEmailValid && isDescriptionValid)
  const isSaveButtonDisabled = isBothFieldsBlank || isContainsInvalidField

  return (
    <div>
      {/* Temporarily suppress unusued variable name error. */}
      {isContactEmailValid && !isContactEmailValid && isDescriptionValid
        ? 'hi'
        : null}
      <ModalMargins>
        <LinkInfoEditor
          contactEmail={contactEmail}
          description={description}
          onContactEmailChange={onContactEmailChange}
          onDescriptionChange={onDescriptionChange}
          onContactEmailValidation={setIsContactEmailValid}
          onDescriptionValidation={setIsDescriptionValid}
          isMountedOnCreateUrlModal
        />
        <div className={classes.buttonWrapper}>
          <Button
            onClick={() => {}}
            size="large"
            color="primary"
            variant="text"
            className={classes.skipButton}
          >
            Skip for now
          </Button>
          <Button
            disabled={isSaveButtonDisabled}
            color="primary"
            size="large"
            variant="outlined"
            className={classes.saveButton}
          >
            Save
          </Button>
        </div>
      </ModalMargins>
    </div>
  )
}
