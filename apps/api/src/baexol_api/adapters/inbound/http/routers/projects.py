"""인바운드 어댑터 — projects HTTP 라우터.

유스케이스를 주입받아 HTTP ↔ 도메인 경계를 담당한다(직렬화는 이 계층에서).
"""

from __future__ import annotations

from fastapi import APIRouter
from pydantic import BaseModel

from baexol_api.application.use_cases.list_projects import ListProjects
from baexol_api.domain.entities.project import Project


class ProjectResponse(BaseModel):
    slug: str
    title: str
    summary: str
    tech: list[str]

    @classmethod
    def from_entity(cls, project: Project) -> "ProjectResponse":
        return cls(
            slug=project.slug,
            title=project.title,
            summary=project.summary,
            tech=list(project.tech),
        )


def create_router(list_projects: ListProjects) -> APIRouter:
    router = APIRouter(prefix="/api/projects", tags=["projects"])

    @router.get("", response_model=list[ProjectResponse])
    def get_projects() -> list[ProjectResponse]:
        return [ProjectResponse.from_entity(p) for p in list_projects()]

    return router
