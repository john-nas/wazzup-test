import { useEffect } from 'react'

type PageMetadataProps = {
  title: string
  description: string
}

function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    const descriptionElement = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousTitle = document.title
    const previousDescription = descriptionElement?.content

    document.title = title
    descriptionElement?.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (previousDescription) {
        descriptionElement?.setAttribute('content', previousDescription)
      }
    }
  }, [description, title])

  return null
}

export default PageMetadata
