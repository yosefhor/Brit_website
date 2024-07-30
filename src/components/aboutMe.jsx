import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className='my-4'>{t('about_me.title')}</h1>
            <ul className='lead fw-normal'>
                {t('about_me.points', { returnObjects: true }).map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className='lead fw-normal'>
                {t('about_me.paragraphs', { returnObjects: true }).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}
