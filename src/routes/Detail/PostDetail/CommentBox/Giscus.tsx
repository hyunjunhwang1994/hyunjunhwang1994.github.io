import { CONFIG } from "site.config"
import { useEffect } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"



const Giscus: React.FC = () => {
    const [scheme] = useScheme()
    const router = useRouter()

    useEffect(() => {
        const script = document.createElement("script")
        const anchor = document.getElementById("comments")
        if (!anchor) return

        script.setAttribute("src", "https://giscus.app/client.js")
        script.setAttribute("data-repo", "hyunjunhwang1994/comments")
        script.setAttribute("data-repo-id", "R_kgDOKx06ig")
        script.setAttribute("data-category", "General")
        script.setAttribute("data-category-id", "DIC_kwDOKx06is4CbPGf")
        script.setAttribute("data-mapping", "pathname")
        script.setAttribute("data-strict", "1")
        script.setAttribute("data-reactions-enabled", "1")
        script.setAttribute("data-emit-metadata", "0")
        script.setAttribute("data-input-position", "top")
        script.setAttribute("data-theme", "preferred_color_scheme")
        script.setAttribute("data-lang", "ko")
        script.setAttribute("data-loading", "lazy")
        script.setAttribute("crossorigin", "anonymous")
        script.setAttribute("async", `true`)

        const config: { [key: string]: string } = CONFIG.giscus.config
        Object.keys(config).forEach((key) => {
            script.setAttribute(key, config[key])
        })
        anchor.appendChild(script)
        return () => {
            anchor.innerHTML = ""
        }
    }, [scheme, router])
    return (
        <>
            <StyledWrapper id="comments">
                <div className="giscus"></div>
            </StyledWrapper>
        </>
    )
}

export default Giscus

const StyledWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: -4rem;
  }
`
