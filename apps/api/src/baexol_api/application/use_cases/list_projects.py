"""유스케이스 — 도메인 흐름을 조율한다. 포트에만 의존(구체 어댑터 모름)."""

from __future__ import annotations

from baexol_api.domain.entities.project import Project
from baexol_api.domain.ports.project_repository import ProjectRepository


class ListProjects:
    def __init__(self, repository: ProjectRepository) -> None:
        self._repository = repository

    def __call__(self) -> list[Project]:
        return self._repository.list_all()
