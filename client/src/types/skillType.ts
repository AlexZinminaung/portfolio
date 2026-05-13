type SkillItem = {
    name: string,
    level: number
}

interface SkillGroup {
    role: string,
    skills: SkillItem[]
}

export type { SkillGroup }