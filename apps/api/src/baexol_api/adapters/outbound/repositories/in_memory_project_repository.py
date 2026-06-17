"""아웃바운드 어댑터 — ProjectRepository 포트의 인메모리 구현(placeholder)."""

from __future__ import annotations

from baexol_api.domain.entities.project import Project
from baexol_api.domain.ports.project_repository import ProjectRepository


class InMemoryProjectRepository(ProjectRepository):
    def __init__(self) -> None:
        # TODO: 실제 콘텐츠로 교체 (DB/CMS/MDX 등). 지금은 골격용 placeholder.
        self._projects: list[Project] = []

    def list_all(self) -> list[Project]:
        return list(self._projects)
